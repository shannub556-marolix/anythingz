import RingLoader from 'react-spinners/RingLoader';

const Spinner = (props) => {
    return (
        // <div className="h-full w-full fixed top-0 left-0 bg-black/20 z-[99999]">
        //     <div className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        //         <span className="loading loading-spinner loading-lg text-primary" />
        //         <span className="text">Loading</span>
        //     </div>
        // </div>
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <div className="row d-flex justify-content-center align-items-center text-center">
                <RingLoader color="#36d7b7" loading={true} size={60} speedMultiplier={1} />
                <label className="mt-2">{props.title}</label>
            </div>

        </div>
    );
};
export default Spinner;