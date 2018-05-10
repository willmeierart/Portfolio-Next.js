import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, compose } from 'react-apollo'
import equals from 'array-equal'
import { binder } from '../lib/_utils'
import WithApolloLoader from '../components/hoc/WithApolloLoader'
import { setActiveItems, toggleActiveItem, setAllLinks, setAllItems } from '../lib/redux/actions'
import { allArtData } from '../lib/apollo/queries'

export default function DataManager (ComposedComponent) {
  class WrappedComponent extends Component {
    constructor (props) {
      super(props)
      this.state = {
        links: [],
        concepts: []
      }
      binder(this, ['normalizeData'])
    }
    componentDidMount () {
      console.log(this.props)
      if (this.state.links.length === 0) {
        this.normalizeData(this.props.data.allArtConcepts)
      }
    }
    componentDidUpdate (prevProps) {
      if (this.props.activeItems !== prevProps.activeItems && this.props.activeItems.length > 0) {
        const newData = this.props.data.allArtConcepts
          .filter(concept => this.props.activeItems.indexOf(concept.name) !== -1)
        console.log(newData, this.props.data.allArtConcepts)
        this.normalizeData(newData)
      }
    }

    normalizeData (artData) {
      const norm = artData.reduce((acc, concept1) => {
        concept1.artConceptsRelatedTo.map(concept2 =>
          [concept1.name, concept2.name]
            .sort((a, b) => a < b ? -1 : 1)
        ).forEach(pair => {
          console.log(pair);
          if (!acc.includes([...pair]) &&
            !acc.includes([...pair].reverse()) &&
            pair[0] !== pair[1] &&
            (this.props.activeItems.length === 0 ||
              (this.props.activeItems.indexOf(pair[0]) !== -1 &&
              this.props.activeItems.indexOf(pair[1]) !== -1))
          ) {
            acc.push(pair)
          }
        })
        return acc
      }, []).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0)

      const normalized = norm.reduce((acc, pair, i) => {
        let push = true
        const firstIndex = norm.map(x => x[0]).indexOf(pair[0])
        const secondIndex = norm.map(x => x[1]).indexOf(pair[0])

        console.log(acc, firstIndex, secondIndex, i)
        if (acc.length === 0 || firstIndex === i || secondIndex === i) {
          acc.push(pair)
          return acc
        }
        acc.forEach(existingPair => {
          const conds = equals(pair, existingPair) 
          console.log(existingPair, conds)
          if (conds) {
            push = false
            console.log(pair, existingPair, push)
          }
        })
        if (push) {
          acc.push(pair)
        }
        return acc
      }, [])
      
      // const normalized = norm.filter((item, pos) => {
      //   const firstIndex = norm.map(x => x[0]).indexOf(item[0])
      //   const secondIndex = norm.map(x => x[1]).indexOf(item[1])
      //   console.log(pos, firstIndex, secondIndex)
      //   const conds = firstIndex === pos || secondIndex === pos
      //     // between normalized and norm is what needs to get fixed
      //   // console.log(conds, item)
      //   return conds
      // })
      // console.log(normalized);
      const concepts = normalized.reduce((acc, pair) => {
        console.log(pair)
        !acc.includes(pair[0]) && acc.push(pair[0])
        !acc.includes(pair[1]) && acc.push(pair[1])
        return acc
      }, [])
      console.log(normalized, concepts, norm)
      
      this.setState({ links: normalized, concepts })
    }

    render () {
      const { links, concepts } = this.state
      // console.log(links, concepts)
      return (
        <ComposedComponent concepts={concepts} links={links} {...this.props} />
      )
    }
  }

  return compose(
    graphql(allArtData)
  )(
    connect(mapStateToProps, mapDispatchToProps)(
      WithApolloLoader(
        WrappedComponent
      )
    )
  )
}

const mapStateToProps = state => {
  return {
    activeItems: state.art.activeItems,
    inactiveItems: state.art.inactiveItems,
    allItems: state.art.allItems,
    allLinks: state.art.allLinks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleActiveItem: item => dispatch(toggleActiveItem(item)),
    onSetActiveItems: items => dispatch(setActiveItems(items)),
    onSetAllItems: itemObj => dispatch(setAllItems(itemObj)),
    onSetAllLinks: links => dispatch(setAllLinks(links))
  }
}

DataManager.propTypes = {}
