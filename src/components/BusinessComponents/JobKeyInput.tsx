import type { InputRef } from 'antd';
import { Input } from 'antd';
import { t } from 'i18next';
import { useRef } from 'react';
import {
  FitContentWrapper,
  TitleWrapper
} from '../StyledComponents/BaseWrapper';

const JobKeyInput = ({
  initialValue,
  onJobKeySearch
}: {
  initialValue: string;
  onJobKeySearch: (input: string) => void;
}) => {
  const searchRef = useRef<InputRef>(null);

  const searchProps = {
    placeholder: t('JobKey'),
    style: { width: '100%' },
    defaultValue: '',
    ref: searchRef,
    value: initialValue
  };

  const onSearch = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onJobKeySearch(e.target.value);
  };

  return (
    <FitContentWrapper>
      <TitleWrapper>{t('JobKey')}</TitleWrapper>
      <div className="title-input-container">
        <Input {...searchProps} allowClear onChange={onSearch} />
      </div>
    </FitContentWrapper>
  );
};

export default JobKeyInput;
