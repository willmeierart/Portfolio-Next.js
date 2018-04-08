const Footer = () => {
  const renderIcons = () => {
    return [1, 2, 3, 4, 5, 6].map((x, i) => {
      return <div key={i} className='icon' />
    })
  }
  return (
    <footer className='footer-outer'>
      <div className='footer-inner'>
        { renderIcons() }
      </div>
      <style jsx>{``}</style>
    </footer>
  )
}

export default Footer
