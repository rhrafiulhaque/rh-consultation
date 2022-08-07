import React from 'react';
import doctor from '../../images/doctor.png';
import PrimaryButton from '../shared/PrimaryButton';
import appointment from '../../images/appointment.png'

const DoctorAppointment = () => {
    return (
        <div style={{background: `url(${appointment})`}} className='flex items-center justify-center mb-36 '>
            <div className="doctor-img flex-1 mt-[-201px]">
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h1 className='py-2 font-bold text-2xl text-primary'>Appointment</h1>
                <h3 className='py-1 font-semibold text-3xl'>Make an Appointment</h3>
                <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nemo quasi eum, laudantium quo cum nisi nobis fuga quas commodi nulla excepturi libero placeat adipisci quam suscipit accusantium atque impedit. Maiores ipsam quibusdam adipisci commodi nostrum in necessitatibus ut molestiae, eos deleniti iste facere id corrupti voluptas quo voluptatibus accusamus possimus quidem accusantium, voluptatem veniam iure totam voluptates reprehenderit. Architecto deserunt fugiat nemo a ipsa soluta tempore eligendi eaque beatae. Iste officiis quam incidunt distinctio magnam corrupti perspiciatis ullam cupiditate natus? Fugiat, possimus expedita id praesentium laboriosam quos accusantium voluptate ea distinctio, natus repellendus dolor aperiam perspiciatis? Saepe, voluptas provident.</p>
                <PrimaryButton>Book Now</PrimaryButton>
            </div>
        </div>
    );
};

export default DoctorAppointment;