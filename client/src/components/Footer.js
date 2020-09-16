import React from 'react';
import '../assets/styles/footer.css'


export const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p className="text-black">&copy; {currentYear} Tower Property Consult Ltd.</p>
        </div>
    )
}