import React, { useState } from 'react'
import './Admin.css'

const Admin = () => {

  const [data , setData] = useState({
    "title":"",
    "price":"",
    "oldPrice":"",
    "image" : "",
    "description":"",
    "colour":"",
    "material":"",
    "Heavy equipment training":false,
    "All workouts":false,
    "size":""
  })

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <form className='main-form'>
        <div className='first-div'>
        <div>
          <input type='text' name='title' placeholder='Enter Title' onChange={handleChange} />
        </div>
        <br />
        <div>
          <input type="number" name='price' placeholder='Enter Price'  onChange={handleChange} />
        </div>
        <br />
        <div>
          <input type="number" name='oldPrice' placeholder='Enter Old Price'   onChange={handleChange} />
        </div>
        <br />
        <div>
          <input type="text" name='image' placeholder='Enter Image Link'  onChange={handleChange} />
        </div>
        <br />
        <div>
          <input type="text" name='description' placeholder='Enter Description'  onChange={handleChange} />
        </div>
        </div>
        <br />
        

        <div className='material'>
          Material : 
            <div>
              <label> Choose Colour: </label>
              <input type="color" name='colour' placeholder='Colour' className='color'  onChange={handleChange} />
            </div>
            <br />

            <div>
                <input type="text" name='material' placeholder='Enter Material'  onChange={handleChange} />
            </div>
            <br />

            <div className='suitable'>
            <label>
                Suitable for:
                <br />
                <div className='suitable-component'>
                    <input type="checkbox" name="Heavy equipment training" value="Heavy equipment training"  onChange={handleChange}  />
                    <label>Heavy equipment training</label>
                    <br />
                    <input type="checkbox" name="All workouts" value="All workouts"  onChange={handleChange} />
                    <label style={{marginLeft:"-70px"}}>All workouts</label>
                </div>
            </label>
            </div>
        </div>
        <br />

        <div>
          <label>
              Size Dimension:
              <input type='text' placeholder='enter size' name='size'  onChange={handleChange} />
          </label>
        </div>
        <br />
      <div>
        <input type="submit" name="submit" value='Submit' className='submit-button' onClick={handleAdd} />
      </div>

    </form>
  )
}

export default Admin
