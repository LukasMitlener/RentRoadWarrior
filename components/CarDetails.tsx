import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const carBackground = (name: string) => {
  if (name == "Tiny Terror" || name == "Brick Racer") {
    return "bg-pattern-rug";
  } else if (name == "Transparent Titan") {
    return "bg-pattern-psy";
  } else if (name == "Wooly Knitster") {
    return "bg-pattern-knitt";
  } else {
    return "bg-pattern-desert";
  }
};

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-out duration-300'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                <button
                  type='button'
                  className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  onClick={closeModal}
                >
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </button>

                <div className='flex-1 flex flex-col gap-3'>
                  <div className={`relative w-full h-80 ${carBackground(car.name)} bg-cover bg-center rounded-lg`}>
                    <Image src={car.imagePath} alt='car model' layout="fill" priority className='object-contain' />
                  </div>

                </div>

                <div className='flex-1 flex flex-col gap-2'>
                  <h2 className='font-semibold text-xl capitalize'>
                    {car.name}
                  </h2>

                  <p>Kills: {car.kills}</p>
                  <p>Speed: {car.speed} km/h</p>
                  <p>Armor Level: {car.armorLevel}</p>
                  <p>Fuel Capacity: {car.fuelCapacity} liters</p>
                  <p>Weaponry: {car.weaponry}</p>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;
