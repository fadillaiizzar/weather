export default function Hero({handleClick, inputRef, search, handleChange}) {
    return(
        <div className="relative h-96 rounded-lg overflow-hidden flex justify-center items-center">
            <div className='absolute inset-0 bg-[url("/image/bg-weather.jpg")] bg-no-repeat bg-cover bg-center bg-fixed opacity-50 z-0 rounded-lg flex flex-col justify-center items-center'></div>
            
            <div className="relative z-10 flex flex-col justify-center items-center">
                <p className='text-2xl sm:text-4xl font-bold px-12 sm:px-0 max-w-md text-center mb-8'>discover the weather in every city you go</p>
                <form>
                    <input 
                        className='outline-none text-center cursor-pointer bg-cream rounded-full flex justify-center items-center py-2 px-5 w-56 h-10' placeholder='🔍 search for a city'
                        onClick={handleClick}
                        ref={inputRef}
                        value={search}
                        onChange={handleChange}>
                    </input>
                </form>
            </div>
        </div>
    );
}