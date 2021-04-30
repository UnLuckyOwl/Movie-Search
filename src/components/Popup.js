import React from 'react'
// import Add from './Add'

function Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>
                    {selected.Title} <span>({selected.Year})</span>
                </h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <div className="buttons">
                    {/* <div> */}
                    <button className="close" onClick={closePopup}>
                        Close
                    </button>
                    {/* </div> */}
                    {/* <div className="addbutton"> */}
                    <button className="add" onClick="">
                        + Add to Watchlist!
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Popup
