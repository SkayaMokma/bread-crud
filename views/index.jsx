const React = require('react')
const Default = require('./layouts/default')

function Index ({ breads, bakers }) {
    const breadDisplay = breads.map((bread) => {
        return (
            <li key= {bread.id}>
                <a href={`/breads/${bread.id}`}>{bread.name}</a>
            </li>
        )
    })

    const bakerDisplay = bakers.map(baker => {
        return (
            <li key={baker.id}>
                <a href={`/baker/${baker.id}`}>{baker.name}</a>
            </li>
        )
    })

    return (
      <Default>
        <h2>Index Page</h2>
        <div className='newButton'>
            <a href= '/breads/new'>
                <button>
                    Add a new bread
                </button>
            </a>
        </div>
        <h3>Bakers</h3>
        <ul>
            {bakerDisplay}
        </ul>
        <h3>Bread</h3>
        <ul>
            {breadDisplay}
        </ul>
      </Default>
    )
}

module.exports = Index