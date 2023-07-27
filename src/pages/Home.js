import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'react-router-dom';
import '../Styles/homestyle.css';
import Banner from '../images/banner1.jpg';

const Home = () => {
  return (
    <Layout>
        <div className="home" style={{backgroundImage:`url(${Banner})`}}>
          <div className='homecontainer'>
            <h1>Cafe De Flora</h1>
            <p>Best Cafe in Delhi and NCR</p>
            <Link to="/Menu">
                <button>Order Now</button>
            </Link>
          </div>

        </div>
    </Layout>
  )
}

export default Home;