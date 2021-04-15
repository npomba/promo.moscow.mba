import Head from 'next/head'
import Link from 'next/link'
import langMenu from '../../translation/data/menu'
import setString from '../../components/hooks/setString'
import data from '../../translation/data'

// import { useEffect } from 'react'
// import loadJs from 'loadjs'

const PagePrograms = ({ programs, mbaTypeOfProgram, mbaFormat }) => {
  // useEffect(() => {
  //   loadJs(
  //     [
  //       '/assets/js/slick.min.js',
  //       '/assets/js/lazysizes.min.js',
  //       '/assets/js/myjs.js',
  //     ],
  //     {
  //       async: false,
  //     }
  //   )
  // }, [])

  return (
    <>
      <Head>
        <title>Mini MBA</title>
      </Head>

      {/* jumbotron-section */}
      <section className='jumbotron-section jumbotron-programs'>
        <div className='container'>
          <div className='jumbotron-content jumbotron-content-programs-page'>
            <div className='breadcrumbs-outer jumbotron-breadcrumbs'>
              <ul className='breadcrumbs'>
                <li>
                  <a href=''>Программы MBA</a>
                </li>
                <li>
                  <a href=''>Mini MBA</a>
                </li>
                <li>
                  <span>Mini MBA</span>
                </li>
              </ul>
            </div>
            {/* <div className='jumbotron-flex'>
              <div className='jumbotron-text jumbotron-text-mini'>
                <h1>Mini MBA online</h1>
                <div className='desc'>
                  Программа профессиональной переподготовки Mini MBA разработана
                  для специалистов и руководителей среднего звена, которые хотят
                  систематизировать имеющиеся знания или познакомиться с
                  ключевыми аспектами новой для себя сферы управленческой
                  деятельности.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className='container'>
        <h1 className='programs-title'>ПРОГРАММЫ ОБУЧЕНИЯ</h1>
        <div className='container-programs'>
          {/* filter */}
          <ul className='filters'>
            <li className='filters__filter'>
              <h4 className='filter__title'>Формат обучения</h4>
              <div className='filter__content'>
                <Link href={`/programs/mini/${mbaFormat}`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaTypeOfProgram === 'mini' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    Mini MBA
                  </a>
                </Link>

                <Link href={`/programs/professional/${mbaFormat}`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaTypeOfProgram === 'professional' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    Professional MBA
                  </a>
                </Link>

                <Link href={`/programs/industry/${mbaFormat}`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaTypeOfProgram === 'industry' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    Industry MBA
                  </a>
                </Link>

                <Link href='/programs/executive'>
                  <a className='txt-highlight'>
                    Executive MBA <span className='premium'>Premium</span>
                  </a>
                </Link>
              </div>
            </li>
            <li className='filters__filter'>
              <h4 className='filter__title'>Формат обучения</h4>
              <div className='filter__content'>
                <Link href={`/programs/${mbaTypeOfProgram}/blended`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaFormat === 'blended' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    BLENDED (с очными модулями)
                  </a>
                </Link>

                <Link href={`/programs/${mbaTypeOfProgram}/online`}>
                  <a>
                    <span
                      className={`filter-circle ${
                        mbaFormat === 'online' ? 'active' : ''
                      }`}
                    ></span>{' '}
                    ONLINE (дистанционно){' '}
                    <span className='discount50'>-50%</span>
                  </a>
                </Link>
              </div>
            </li>
          </ul>

          {/* mini-programs-section */}
          <div className='mini-programs-section'>
            <div className='mini-programs-section__programs-info'>
              <div className='programs-info__title'>
                <h2 className=''>
                  {mbaTypeOfProgram === 'mini'
                    ? 'Mini MBA'
                    : mbaTypeOfProgram === 'professional'
                    ? 'Professional MBA'
                    : mbaTypeOfProgram === 'industry'
                    ? 'Industry MBA'
                    : ''}{' '}
                  {mbaFormat}
                </h2>
                <span>{programs.length} программ</span>
              </div>

              <p className='programs-info__dics'>
                {mbaTypeOfProgram === 'mini'
                  ? setString(langMenu.categoryDiscMini)
                  : mbaTypeOfProgram === 'professional'
                  ? setString(langMenu.categoryDiscProfessional)
                  : mbaTypeOfProgram === 'industry'
                  ? setString(langMenu.categoryDiscIndustry)
                  : ''}
              </p>

              <div className='programs-info__counters'>
                <p>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z'
                      fill='#D9D9D9'
                    />
                  </svg>
                  40 дисциплин об управлениии
                </p>
                <p>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11.003 16L6.76 11.757L8.174 10.343L11.003 13.172L16.659 7.515L18.074 8.929L11.003 16Z'
                      fill='#D9D9D9'
                    />
                  </svg>
                  27 дисциплин специализации
                </p>
              </div>
            </div>
            <ul className='jumbotron-red-info jumbotron-red-info-programs-page'>
              <li>
                <p>Срок обучения:</p>
                <div className='detail'>3 года 6 месяцев</div>
              </li>
              <li>
                <p>Форма обучения:</p>
                <div className='detail'>Дистансционное</div>
              </li>
              <li>
                <p>Ближайшее зачисление:</p>
                <div className='detail'>23 января</div>
              </li>
              <li>
                <p>Стоимость:</p>
                <div className='detail'>
                  <span className='old-price'>390 000 &#8381;</span>
                  <span className='new-price'>540 000 Р.</span>
                </div>
              </li>
            </ul>
            <div className='mini-programs-slider'>
              {programs.map((program, idx) => {
                return (
                  <Link
                    href={`/programs/${mbaTypeOfProgram}/${mbaFormat}/${program._id}`}
                    key={program._id}
                  >
                    <a className='mini-programs-block'>
                      <div className='arrow'>
                        <img alt='' src='/assets/images/arrow_diagonal.svg' />
                      </div>
                      <div className='number'>{idx}.</div>
                      <div className='title'>{program.title}</div>
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PagePrograms
