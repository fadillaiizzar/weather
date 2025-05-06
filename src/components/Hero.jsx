export default function Hero({handleClick, inputRef, search, handleChange}) {
    return(
        <div className='bg-breeze rounded-lg flex flex-col justify-center items-center h-96'>
            <p className='text-4xl font-bold px-12 sm:px-0 max-w-md text-center mb-8'>discover the weather in every city you go</p>
            <div 
                className='bg-cream rounded-full flex justify-center items-center py-2 px-5 w-52 cursor-pointer h-10'
                onClick={handleClick}>
                <form>
                    <input 
                        className='outline-none text-center cursor-pointer' placeholder='🔍 search for a city'
                        ref={inputRef}
                        value={search}
                        onChange={handleChange}>
                    </input>
                </form>
            </div>
        </div>
    );
}