
function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className='text-center'>CopyrightÂ© {currentYear} Soukouna </div>
        
    )
}
export default Footer;