import Link from 'next/link'
export default function Navbar() {
    return (
        <div className="bg-black py-5 px-5 mb-10 flex flex-wrap text-white">
            <h4 className='mr-5'>Gym Tracker</h4>
            <Link href='/' className='mr-2'>Profile</Link>
            <Link href='/history' className='mr-2'>History</Link>
            <Link href='/exercises'>Exercises</Link>
        </div>
    )
}
