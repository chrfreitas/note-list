import React, { MouseEvent } from 'react';

import { colors } from '../../../../styles/colors';
import { isMobile } from '../../../../services/utils/utils';
import Icon from '../../../../components/icon/icon';
import NoteTags from '../note-tags/note-tags';
import NoteDate from '../note-date/note-date';
import NoteIcon from '../note-icon/note-icon';
import { Container, Title, Subtitle, Infos, Header } from './note-item.styles';
import { INoteItemProps } from './note-item.interfaces';

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
  clear
}: INoteItemProps) => {
  const onClick = (e: MouseEvent, noteId: string): void => {
    if (e.ctrlKey || e.metaKey || isMobile()) {
      select(noteId);
      return;
    }

    clear();
  };

  return (
    <Container
      data-testid="note-item"
      onClick={(e) => onClick(e, id)}
      selected={selected}
    >
      <NoteIcon type={type} />
      <Infos>
        <Header>
          <Title data-testid="note-item-title">{title}</Title>
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
