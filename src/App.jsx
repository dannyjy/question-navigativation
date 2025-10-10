import QuestionCard from './components/questionCard';

const App = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10]

    const activePage = (e) => {
        e.target.style.backgroundColor = "#0b9599"
        e.target.style.color = "#ffffff"
    }
    return (
        <div className="h-screen flex items-center justify-center bg-green-50">
            <main className="rounded-xl p-4 w-fit">
                <div className='gap-4 flex items-center justify-center pb-6'>
                    {
                        numbers.map(num =>  <p className=' flex items-center justify-center text-[.8rem] rounded-full w-2 h-2 p-3' key={num} onClick={activePage}>{num}</p>)
                    }
                </div>
                <QuestionCard/>
            </main>
        </div>
    )
}

export default App;