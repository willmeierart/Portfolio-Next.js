const Footer = () => {
  const renderIcons = () => {
    return [1, 2, 3, 4, 5, 6].map((x, i) => {
      return (
        <div key={i} className='icon'>
          <style jsx>{`
            .icon {
              border-radius: 50%;
              height: 20px;
              width: 20px;
              margin: 10px;
              display: inline-block;
            }
          `}</style>
        </div>
      )
    })
  }
  return (
    <footer className='footer-outer'>
      <div className='footer-inner'>
        { renderIcons() }
      </div>
      <style jsx>{`
        footer {
          display: flex;
          position: fixed;
          bottom: 0;
          left: 0;
          padding: 0 10px;
          height: 60px;
          width: 99.95vw;
        }
      `}</style>
    </footer>
  )
}

export default Footer
