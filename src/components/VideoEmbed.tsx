export default function VideoEmbed() {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 8px 30px rgba(0,0,0,.35)",
      }}
    >
      <video
        src="/lucas-video.mp4"
        controls
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          border: 0,
        }}
      />
    </div>
  );
}
