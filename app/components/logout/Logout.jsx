import {RiLogoutBoxLine} from 'react-icons/ri'

const Logout = () => {
  return (
    <div className='border-b border-slate-300 py-3 mx-3'>
        <button className={'link'}>
            <RiLogoutBoxLine size={23} className="min-w-max" />
                <span className='whitespace-pre px-1 text-[0.9rem] py-3 font-medium overflow-x-hidden '>
                    Logout
                </span>
        </button>
    </div>
  )
}

export default Logout