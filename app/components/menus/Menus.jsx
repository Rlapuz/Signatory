import {BsGrid, BsBox, BsCalendar4Event, BsPersonGear,BsBell } from 'react-icons/bs'
import {SlCloudUpload} from 'react-icons/sl'
import Link from "next/link";
import { useRouter } from "next/router";
import Logout from '../logout/Logout';

const Menus = () => {
    
    return (
        <div className="flex flex-col h-full">
                        <ul className="whitespace-pre px-3 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden ">
                            
                            {/* dashboard */}
                            <li>
                                <Link href='/dashboard' className={'link'}>
                                    <BsGrid size={23} className="min-w-max" />
                                    Dashboard
                                </Link>
                            </li>

                            {/* viewfiles */}
                            <li>
                                <Link href='/view-files' className={'link'}>
                                    <BsBox size={23} className="min-w-max" />
                                    View FIles
                                </Link>
                            </li>

                            {/* upload */}
                            <li>
                                <Link href='/upload' className={'link'}>
                                    <SlCloudUpload size={23} className="min-w-max" />
                                    Upload
                                </Link>
                            </li>

                            {/* calendar */}
                            <li>
                                <Link href='/calendar' className={'link'}>
                                    <BsCalendar4Event size={23} className="min-w-max" />
                                    Calendar
                                </Link>
                            </li>

                            {/* notifications */}
                            <li>
                                <Link href='/notifications' className={'link'}>
                                    <BsBell size={23} className="min-w-max" />
                                    Notifications
                                </Link>
                            </li>

                            {/* Profile */}
                            <li>
                                <Link href='/profile' className={'link'}>
                                    <BsPersonGear size={23} className="min-w-max" />
                                    Profile
                                </Link>
                            </li>
                        </ul>
                            <Logout />
                    </div>
    )
}

export default Menus