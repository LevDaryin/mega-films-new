import { useItems } from '@/modules/Filters/useItems';

import { SmTitle } from '@/UI/SmTitle';
import ReactSlider from 'react-slider';

import '../../UI/styles/sliderStyle.css';

interface Props {
  title: string;
}

const YearFilter = ({ title }: Props) => {
  const { year } = useItems();

  return (
    <>
      <SmTitle>{title}</SmTitle>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={year.from}
        max={year.to}
        defaultValue={[year.from, year.to]}
        onAfterChange={(state) => {
          console.log(state);
        }}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={2}
      />
    </>
  );
};

export { YearFilter };
