import useAt from '@/components/hooks/useAt'
import ProgramsModule from '@/components/general/ProgramsModule'
import Stickers from '@/components/general/Stickers'
import Sticker from '@/components/general/Sticker'
import ProgramSubjects from '@/components/hooks/ProgramSubjects'

import { useEffect } from 'react'
import loadJs from 'loadjs'

const ProgramsModules = ({ data }) => {
  const at = useAt()

  useEffect(() => {
    loadJs(['/assets/js/programsModules.js'], {
      async: false
    })
  }, [])

  return (
    <section className='training-section'>
      <div className='section-pl'>
        <h2>Программа обучения</h2>
        <ul className='training-red-list'>
          <li>
            <div className='number'>
              <ProgramSubjects subjects='base' />
              <ProgramSubjects subjects='base' type='executive' />
            </div>
            <p>дисциплин базовой части</p>
          </li>
          <li>
            <div className='number'>
              <ProgramSubjects subjects='specialty' />
              <ProgramSubjects subjects='specialty' type='executive' />
            </div>
            <p>дисциплин специализации</p>
          </li>
        </ul>
        <h3>Базовые дисциплины</h3>
      </div>
      <div className='training-list'>
        {at.mini && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={[
                'Основы менеджмента',
                'Операционный менеджмент',
                'Стратегический менеджмент',
                'Корпоративная социальная ответственность',
                'Управление проектами',
                'Управление человеческими ресурсами',
                'Управление маркетингом'
              ]}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={[
                'Профессиональные навыки и личностное развитие руководителя',
                'Организационное поведение',
                'Управление конфликтами',
                'Финансовый менеджмент',
                'Стратегический маркетинг',
                'Интернет-маркетинг',
                'IT-технологии в управлении',
                'Основы предпринимательской деятельности'
              ]}
            />
          </>
        )}
        {(at.industry || at.professional) && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle='Современный менеджмент'
              items={[
                'Основы менеджмента',
                'Операционный менеджмент',
                'Инновационный менеджмент',
                'Стратегический менеджмент',
                'Антикризисный менеджмент',
                'Корпоративная социальная ответственность'
              ]}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle='Основные сферы управления'
              items={[
                'Управление проектами',
                'Управление качеством',
                'Управление человеческими ресурсами',
                'Управление логистикой',
                'Управление изменениями',
                'Управление безопасностью организации',
                'Управление знаниями и интеллектуальным капиталом',
                'Управление маркетингом',
                'IT-технологии в управлении',
                'Управление бизнес-процессами'
              ]}
            />
            <ProgramsModule
              title='3 модуль'
              subTitle='Руководитель в современном бизнесе'
              items={[
                'Профессиональные навыки и личностное развитие',
                'Деловой английский язык',
                'Организационное поведение',
                'Лидерство',
                'Управление конфликтами',
                'Командообразование'
              ]}
            />
            <ProgramsModule
              title='4 модуль'
              subTitle='Экономика и финансы'
              items={[
                'Управленческая экономика',
                'Финансовый менеджмент',
                'Финансовые угрозы и риск-менеджмент',
                'Инвестиционное финансирование и кредитование',
                'Эккаутинг'
              ]}
            />
            <ProgramsModule
              title='5 модуль'
              subTitle='Продвинутый маркетинг'
              items={[
                'Стратегический маркетинг',
                'Маркетинговые исследования',
                'Интернет-маркетинг',
                'Функциональные маркетинговые стратегии',
                'Брендинг',
                'Современные методы продвижения товаров и услуг'
              ]}
            />
            <ProgramsModule
              title='6 модуль'
              subTitle='Предпринимательство'
              items={[
                'Основы предпринимательской деятельности',
                'Правовые основы бизнеса',
                'Бизнес-планирование',
                'Цифровая трансформация бизнеса'
              ]}
            />
          </>
        )}

        {at.executive && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx < 4)}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={data.specializedSubjects.filter(
                (item, idx) => idx >= 4 && idx <= 7
              )}
            />
            <ProgramsModule
              title='3 модуль'
              subTitle=''
              items={data.specializedSubjects.filter(
                (item, idx) => idx > 7 && idx <= 10
              )}
            />
            <ProgramsModule
              title='4 модуль'
              subTitle=''
              items={data.specializedSubjects.filter(
                (item, idx) => idx > 10 && idx <= 14
              )}
            />
          </>
        )}
      </div>
      <div className='section-pl'>
        <h3>Специализированные дисциплины</h3>
      </div>
      <div className='training-list'>
        {(at.industry || at.professional) && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx < 5)}
            />
            <ProgramsModule
              title='2 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx >= 5)}
            />
          </>
        )}

        {at.mini && at.online && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx <= 5)}
            />
            <ProgramsModule
              title='Практика'
              subTitle=''
              items={[
                'Работа над собственным проектом',
                'Групповые задания и нетворкинг',
                'Кейс-методы',
                'Эссе'
              ]}
            />
          </>
        )}

        {at.mini && at.blended && (
          <>
            <ProgramsModule
              title='1 модуль'
              subTitle=''
              items={data.specializedSubjects.filter((item, idx) => idx <= 5)}
            />
            <ProgramsModule
              title='Очный модуль'
              subTitle=''
              items={[
                'Живое общение со спикерами',
                'Групповые проекты и разбор кейсов',
                'Домашние задания и курсовая работа',
                'Защита проектов и выпускной вечер'
              ]}
            />
          </>
        )}

        {at.blended && !at.mini && (
          <>
            <ProgramsModule
              title='Практика'
              items={[
                'Работа над собственным проектом',
                'Групповые задания и нетворкинг',
                'Кейс-методы',
                'Эссе'
              ]}
            />
            <ProgramsModule
              title='Защита диплома'
              items={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой дипломной работы'
              ]}
            />
          </>
        )}
        {at.online && !at.mini && (
          <Stickers>
            <Sticker
              type={'short'}
              clr={'red'}
              title={'Практические модули'}
              listItems={[
                'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
              ]}
            />
            <Sticker
              type={'short'}
              clr={'dark'}
              title={'Итоговая аттестация'}
              listItems={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой аттестационной работы'
              ]}
            />
          </Stickers>
        )}
        {at.online && at.mini && (
          <Sticker
            type={'long'}
            clr={'dark'}
            title={'Итоговая аттестация'}
            listItems={[
              'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
              'Защита итоговой аттестационной работы'
            ]}
          />
        )}
        {at.blended && !at.mini && (
          <Sticker
            type={'long'}
            clr={'dark'}
            title={'Очный модуль в Москве'}
            listItems={[
              'Живое общение со спикерами',
              'Групповые проекты и разбор кейсов',
              'Домашние задания и курсовая работа',
              'Защита проектов и выпускной вечер'
            ]}
          />
        )}
        {at.blended && at.mini && (
          <Stickers>
            <Sticker
              type={'short'}
              clr={'red'}
              title={'Практические модули'}
              listItems={[
                'Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе'
              ]}
            />
            <Sticker
              type={'short'}
              clr={'dark'}
              title={'Итоговая аттестация'}
              listItems={[
                'Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)',
                'Защита итоговой аттестационной работы'
              ]}
            />
          </Stickers>
        )}
      </div>
    </section>
  )
}

export default ProgramsModules
