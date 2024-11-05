import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel'
import { clinicImages } from '@/utils/constants'

const Carousel = () => {
  const OPTIONS = { loop: true, duration: 20 }

  return (
    <EmblaCarousel slides={clinicImages} options={OPTIONS} />
  )
}

export default Carousel;