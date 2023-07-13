import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/images/logo.png'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
        <h1 className="2xl:text-[36px] sm:text-[32px] text-[25px] font-extrabold">Rent<span className="text-primary-blue">MadMax</span>Car</h1>
      </Link>

      <CustomButton
        title='Buy me coffee'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      />
      <CustomButton
      title='Buy cool poster'
      btnType='button'
      containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
    />
    </nav>
  </header>
);

export default Navbar;
