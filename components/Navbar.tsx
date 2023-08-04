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
          width={96}
          height={18}
          className='object-contain'
        />
        <h1 className="ml-3 2xl:text-[48px] sm:text-[32px] text-[25px] font-black">Rent<span className="text-primary-orange">Road</span>Warrior</h1>
      </Link>

      <CustomButton
        title='Rent car'
        btnType='button'
        containerStyles='text-white rounded-full bg-primary-orange min-w-[130px]'
      />
    </nav>
  </header>
);

export default Navbar;
