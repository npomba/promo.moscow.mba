import Image from 'next/image'
import PopUpForm from '@/components/popups/Form'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const WebinarCard = ({
  title,
  portrait,
  speaker,
  month,
  date,
  hours,
  minutes,
  dur,
  disabled
}) => {
  return (
    <>
      <Popup
        trigger={
          <a
            href='#vebinarModal'
            className={`vebinars-block ${disabled && 'disabled'} popup-open`}
            data-effect='mfp-zoom-in'>
            <div className='bell'>
              <img src='/assets/images/icon_bell.svg' alt='' />
            </div>
            <div className='date'>
              <strong>
                {date} {month},
              </strong>{' '}
              {hours}:{minutes}
            </div>
            <div className='title'>{title}</div>
            <div className='info'>
              <div className='author'>
                <div className='avatar'>
                  <Image src={portrait} alt={speaker} width={50} height={59} />
                </div>
                <div>
                  Спикер: <span className='name'>{speaker}</span>
                </div>
              </div>
              <div className='long'>{dur}</div>
            </div>
          </a>
        }
        modal
        nested>
        {close => (
          <PopUpForm
            title={'Узнайте подробнее о вебинаре'}
            disc={
              'Оставьте заявку и узнайте подробнее о программе вебинара и спикере'
            }
            closePopUpForm={close}
          />
        )}
      </Popup>
    </>
  )
}

export default WebinarCard
