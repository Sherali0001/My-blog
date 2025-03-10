import './secondItem.css'

export default function SecondItem() {
  return (
    <>
      <div className='second-item'>
        <div className="card">
          <div className="img-div2">
            <img src="https://images.unsplash.com/photo-1741097574041-d70d3fe6a3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>
          <div className="content">
            <h1 className="name">My name</h1>
            <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
          </div>
        </div>

        <div className='card'>
          <h1 className="post">Popular Posts</h1>
          <div className='post-card'>
            <div className="img-wrapper">
              <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="img" />
            </div>
            <div className="post-content">
              <h2>Lorem</h2>
              <h3>Sed mattis nunc</h3>
            </div>
          </div>

          <div className='post-card'>
            <div className="img-wrapper">
              <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="img" />
            </div>
            <div className="post-content">
              <h2>Lorem</h2>
              <h3>Sed mattis nunc</h3>
            </div>
          </div>
          <div className='post-card'>
            <div className="img-wrapper">
              <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="img" />
            </div>
            <div className="post-content">
              <h2>Lorem</h2>
              <h3>Sed mattis nunc</h3>
            </div>
          </div>
        </div>

        <div className="tags-wrapper">
          <h2 className='tags'>Tags</h2>
          <div className="count-wrapper">
            <p className="count">Travel</p>
            <p className="count">New York</p>
            <p className="count">London</p>
            <p className="count">IKEA</p>
            <p className="count">DIY</p>
            <p className="count">ideas</p>
            <p className="count">Baby</p>
            <p className="count">Family</p>
            <p className="count">News</p>
            <p className="count">Clothing</p>
            <p className="count">Shopping</p>
            <p className="count">Sports</p>
            <p className="count">Games</p>
          </div>
        </div>
      </div>
    </>
  )
}