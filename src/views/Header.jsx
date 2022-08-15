import logo from '../images/nr.png'
const Header = () => {
    return (<div> 
      <div className='h-36 w-screen bg-slate-200'>
        <img className='h-20 w-20 ml-5 pt-10' src={logo}/>
        <button className='float-right  text-xl p-5 mx-5 rounded-full bg-slate-300'>Login</button> <button className='text-xl p-5 float-right ml-5 rounded-full bg-slate-300'>Canvas</button>
        </div>
    
    
    </div> );
}
 
export default Header;