import React, {Component} from 'react'
import { FaGithubSquare, FaLinkedinSquare, FaInstagram, FaFacebookSquare, FaEnvelope, FaMedium, FaHeart } from 'react-icons/lib/fa'

const socialIcons = () => (
  <div className='icons-container'>
    <a href='https://github.com/willmeierart' target='_blank'>
      <FaGithubSquare /></a>
    <a href='https://medium.com/@willmeierart' target='_blank'>
      <FaMedium /></a>
    <a href='https://www.linkedin.com/in/willmeierart' target='_blank'>
      <FaLinkedinSquare /></a>
    <a href='https://www.instagram.com/tide.way.out/' target='_blank'>
      <FaInstagram /></a>
    <a href='https://www.facebook.com/will.meier.313' target='_blank'>
      <FaFacebookSquare /></a>
    <a href='mailto:willmeierart@gmail.com' target='_blank'>
      <FaEnvelope /></a>
  </div>
)

export default socialIcons

