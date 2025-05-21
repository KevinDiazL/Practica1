export function Cards(props) {
    return (
        <>
            <div className='flex flex-row gap-0 w-30 lg:w-60 lg:h-80 relative'>
                <img src={props.img} className='w-[120px] h-[170px] lg:w-[220px] lg:h-[320px]' alt="photo1" />
                <p className='rotate-90 text-[12px] lg:text-[20px] absolute -right-6.5 lg:-right-16 top-6'>{props.name}</p>
            </div>
            <p className='text-[12px] lg:text-[20px] font-semibold w-[100px]'>{props.text}</p>
        </>
    )
}
