import { Button } from '..'
import * as S from './style'
import { PlayArrow } from '@mui/icons-material'

interface VideoProps {
  title: string
  url: string
}

export const Video = ({ title, url }: VideoProps) => {
  return (
    <S.Video>
      <S.VideoFrame
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay;
        clipboard-write; encrypted-media; gyroscope; picture-in-picture;
        web-share"
      ></S.VideoFrame>
      <S.Description>
        <h3>{title}</h3>
        <Button buttonType="transparent">
          <PlayArrow />
          <span>Assistir</span>
        </Button>
      </S.Description>
    </S.Video>
  )
}
