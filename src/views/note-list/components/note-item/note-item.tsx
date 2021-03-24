import React, { MouseEvent } from 'react';

import { INoteDataSource } from '../../../../services/datasource/datasource.interface';
import { colors } from '../../../../styles/colors';
import Icon from '../../../../components/icon/icon';
import NoteTags from '../note-tags/note-tags';
import NoteDate from '../note-date/note-date';
import NoteIcon from '../note-icon/note-icon';
import { Container, Title, Subtitle, Infos, Header } from './note-item.styles';

interface INoteItemProps extends INoteDataSource {
  select: (id: string) => void;
  clearAllSelects: () => void;
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
  selected,
  select,
  clearAllSelects
}: INoteItemProps) => {
  const onClick = (e: MouseEvent, noteId: string): void => {
    if (e.ctrlKey || e.metaKey) {
      select(noteId);
      return;
    }

    clearAllSelects();
  };

  return (
    <Container onClick={(e) => onClick(e, id)} selected={selected}>
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
