import { FC } from 'react'
import { Stack, Chip } from '@mui/material'
import { Tag } from '../types'

type TagsProps = {
  handleTagClick: (tagId: string) => void;
  tags: Tag[] | null;
  selectedTagId: string | null;
}

const Tags: FC<TagsProps> = ({ handleTagClick, tags, selectedTagId }) => (tags?.length
  ? (
    <Stack
      direction="row"
      sx={{
        mt: '1rem',
        gap: '.5rem',
        flexWrap: 'wrap',
      }}
    >
      {tags.map(tag => (
        <Chip
          key={tag.id}
          label={tag.name}
          onClick={() => handleTagClick(tag.id)}
          sx={{
            backgroundColor: tag.bg,
            color: tag.color,
            // eslint-disable-next-line no-magic-numbers
            boxShadow: tag.id === selectedTagId ? 3 : 0,
          }}
        />
      ))}
    </Stack>
  )
  : null)

export default Tags
