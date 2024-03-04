import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

export default function FooterCom() {
  return(
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-2 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-300 rounded-lg text-white'>Sahil's</span>
                    Blog
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title title='About'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://www.10jsprojects.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                            
                                10 JS Projects
                            </Footer.Link>
                            <Footer.Link
                                href='/about'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                            
                                Sahil's Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Follow us'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='https://github.com/SahilSavardekar'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                            
                                Github
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                            >
                                Discord
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href='#'
                            >
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link
                                href='#'
                            >
                                Terms &amp; Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className=''>
                <Footer.Copyright href='#' by="Sahil's Blog" year={new Date().getFullYear()}/>
                <div className=''>
                    <FooterCom.Icon href="#" icon={BsFacebook}/>
                    <FooterCom.Icon href="#" icon={BsInstagram}/>
                    <FooterCom.Icon href="#" icon={BsTwitter}/>
                    <FooterCom.Icon href="#" icon={BsGithub}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}
