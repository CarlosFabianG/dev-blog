const YEAR = new Date().getFullYear()

export default {
  readMore: false,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem', color: 'white' }}>
      <time>{YEAR}</time> © Carlos Fabian.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
          color: #a2ffff;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
