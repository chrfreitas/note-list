import React, { useState } from 'react';

import { INoteDataSource } from '../../../../services/datasource/datasource.interface';
import Icon from '../../../../components/icon/icon';
import NoteTags from '../note-tags/note-tags';
import NoteDate from '../note-date/note-date';
import NoteIcon from '../note-icon/note-icon';
import { Container, Title, Subtitle, Infos, Header } from './note-item.styles';
import { colors } from '../../../../styles/colors';

interface INoteItemProps extends INoteDataSource {
  select: (id: string) => void;
}

// eslint-disable-next-line max-lines-per-function
const NoteItem = ({
  id,
  type,
  title,
  subtitle,
  date,
  tags,
  status,
  select
}: INoteItemProps) => {
  const [selected, setSelected] = useState<boolean>(false);

  const onClick = (noteId: string): void => {
    select(noteId);
    setSelected((prev) => !prev);
  };

  return (
    <Container onClick={() => onClick(id)} selected={selected}>
      <NoteIcon type={type} />
      <Infos>
        <Header>
          <Title>{title}</Title>
          {status === 'blocked' && (
            <Icon
              type="locker"
              width={9}
              height={11}
              color={colors.darkGray}
              data-testid="locker-icon"
            />
          )}
        </Header>
        <Subtitle>{subtitle}</Subtitle>
        <NoteDate date={date} />
        {tags.length && <NoteTags tags={tags} />}
      </Infos>
    </Container>
  );
};

export default NoteItem;
