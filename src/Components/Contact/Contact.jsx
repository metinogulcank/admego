import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className='section_title'>İLETİŞİM</h2>

        <div className='contact_container container'>
            <div className='contact_content'>
                <h3 className='contact_title'>Bizimle İletişime Geç</h3>

                <div className='contact_info'>
                    <div className='contact_card'>
                        <i className='bx bx-phone contact_card-icon'></i>
                        <h3 className='contact_card-title'>Telefon</h3>
                        <span className='contact_card-data'>+90 553 659 16 33</span>
                        <span className='contact_card-data'>+90 555 064 81 80</span>
                    </div>
                    <div className='contact_card'>
                        <i className='bx bx-envelope contact_card-icon'></i>

                        <h3 className='contact_card-title'>Email</h3>
                        <span className='contact_card-data'>metinogulcank06@gmail.com </span>
                        <a href='mailto:metinogulcank06@gmail.com' className='contact_button'>
                             Contact
                            <i className='bx bx-right-arrow-alt contact_button-alt'></i>
                        </a>
                    </div>
                    <div className='contact_card'>
                        <i className='bx bx-location-plus contact_card-icon'></i>
                        <h3 className='contact_card-title'>Konum</h3>
                        <span className='contact_card-data'>Ata Tepe Sitesi, 2165. Sokak No:20 C Blok Daire 5 Söğütözü/Ankara</span>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}

export default Contact