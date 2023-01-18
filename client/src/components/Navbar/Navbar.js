import React, { Fragment } from 'react'
import './NavbarStyles.scss'
import { Link, Outlet } from 'react-router-dom'
import { Container, Row, Col, Title, Theme } from '../../Styles/styled'
import { Option } from './NavbarStyles'
import Logo from '../../images/Logo/Logo'
import { FaUserAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar-fixed'>
        <Container className='navbar-container'>
          <Row align={'center'} justify={'space-between'}>
            <Col>
              <Link className='navbar-logo-place' to='/'>
                <Logo />
                <Title family={Theme.Family} size={Theme.H1} color={Theme.Orange}>circular journeys</Title>
              </Link>
            </Col>
            <Col>
              <ul className='navbar-option-place'>
                <li>
                  <Link to='/blog' title='Blog'>
                    <Option>部落格</Option>
                  </Link>
                </li>
                <li>
                  <Link to='/shop'>
                    <Option>商城</Option>
                  </Link>
                </li>
                <li>
                  <Link to='/#'>
                    <Option>自由行</Option>
                  </Link>
                </li>
                <li>
                  <Link to='/user/login'>
                    <FaUserAlt size={30} />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar
