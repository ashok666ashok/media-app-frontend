import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
       <MDBFooter className='text-center ' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <Link to={'https://www.facebook.com'}>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          </Link>

          <Link to={'https://www.twitter.com'}>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          </Link>

          <Link to={'https://www.google.com'}>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          </Link>

          <Link to={'https://www.instagram.com'}>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          </Link>

          <Link to={'https://www.linkedin.com'}>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          </Link>

          <Link to={'https://www.github.com'}>
          <MDBBtn outline color="light" floating className='m-1'  role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
          </Link>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Products</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <Link to={'/home'}>
                  <a href='#!' className='text-white'>
                    Home
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/landingpage'}>
                  <a className='text-white'>
                    Landing Page
                  </a>
                  </Link>
                </li>
                <li>
                  <Link to={'/watchhistory'}>
                  <a  className='text-white'>
                    Watch History
                  </a>
                  </Link>
                </li>
                <li>
                  <a  className='text-white'>
                   Subscription and Payments
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Solution</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Broadcasters
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Publisher
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Fitness
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Online Courses
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Results</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    TEI Report-Publisher
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    TEI Report-Broadcaster
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Blog
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Company
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Resourses
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Developer Tool
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Media-Player
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer