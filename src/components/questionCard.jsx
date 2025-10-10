import QuizQuestions from './../Question/questions';

const QuestionCard = () => {
    const random = Math.floor(Math.random() * 10)
    const Question = QuizQuestions.filter((q,i) => i === random)
    const firstQuestion = Question[0]
    console.log(random)

    // const activePage = (e) => {
    //     e.target.style.backgroundColor = "#0b9507"
    // }
    
    return (
        <div className=' w-[500px] flex flex-col pt-10 bg-white rounded-2xl px-3 py-6 shadow-green-200 '>
            <div className='flex flex-col px-12 justify-center'>
                <h3 className='text-center' >{firstQuestion.question}</h3>
                <div className='py-8 flex flex-col justify-center'>
                    {
                        firstQuestion.answers.map((ans,i) => {
                            return (
                                <div className='flex gap-5' key={i}>
                                    <input type="radio" name="answer" id="" />
                                    <p>{ans.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <button className='text-[.9rem] w-fit self-end px-6 py-2 rounded bg-green-200 font-bold'>Next</button>
        </div>
    )
}

export default QuestionCard