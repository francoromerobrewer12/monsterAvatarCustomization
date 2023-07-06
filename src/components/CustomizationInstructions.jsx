import '../styles/instructions.css'

const CustomizationInstructions = ({ startedExperience }) => {
    return (
        <div className="instructions_wraper d-flex justify-content-center align-items-center">
            {
                startedExperience && <div
                    className="instructions_container text-center d-flex flex-column justify-content-center align-items-center pb-5 p-4 p-lg-5"
                >
                    <h5 className='font-weight-bold mb-3'>CUSTOMIZE YOUR CHARACTER</h5>
                    <p className='mb-0'>Use the arrows to select accessories and customize the best avatar!</p>

                    <div className='instructions_fake_btn font-weight-bold py-2 px-3'>LET'S GO</div>
                </div>
            }
        </div>
    )
}

export default CustomizationInstructions