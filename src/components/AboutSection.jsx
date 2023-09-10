import CustomButton from './CustomButton'
import SectionContainer from './SectionContainer'

const AboutSection = () => {
  return (
    <section className='border-t border-gray-300/50'>
      <SectionContainer>
        <div className='flex justify-between items-center gap-10 py-10'>
          <div className='basis-5/12'>
            <h2 className='text-FontDark text-5xl font-semibold mb-8'>
              Why our <br /> consulting?
            </h2>
            <p className='text-primaryFont'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              totam autem quibusdam alias eos et optio, repellendus assumenda
              nesciunt fugiat?
            </p>
            <CustomButton>About Us</CustomButton>
          </div>
          <div className='basis-7/12 w-full'>
            <img
              src='/src/assets/accent.jpg'
              alt='collab image'
              className='w-full object-cover rounded'
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default AboutSection
