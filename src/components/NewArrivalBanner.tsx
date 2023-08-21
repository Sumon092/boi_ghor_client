import newArrivalBanner from '../assets/images/banner/arrivalbanner.jpg'

const NewArrivalBanner = () => {
    return (
        <div className='mt-7 cursor-pointer'>
            <img className='w-full' src={newArrivalBanner} alt="" />
        </div>
    );
};

export default NewArrivalBanner;