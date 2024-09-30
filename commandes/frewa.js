const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const BaseUrl = 'https://giftedapis.us.kg';
const giftedapikey = 'gifteddevskk';

zokou({
  nomCom: "play",
  categorie: "Search",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4v2?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*LUCKY_MD MEDIA PLAYER*\n
╭━━━━━━⊷⊷⊷⊷━━━━━⊛
┊✺ *Title:* ${video.title}
┊✺ *Quality:* ${video.type}
┊✺ *Duration:* ${video.timestamp}
┊✺ *Viewers:* ${video.views}
┊✺ *Uploaded:* ${video.ago}
┊✺ *Artist:* ${video.author.name}
╰━━━━━━⊷⊷⊷⊷━━━━━⊛
❖ *Direct YtLink:* ${video.url}
┌━━══━━☆✞✞☆━━══━━⊷
┊ *_Powered by frediezra._*
└━━══━━☆✞✞☆━━══━━⊷`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre('`Lucky md has just downloaded your song keep using lucky bot`...');
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

zokou({
  nomCom: "videodoc",
  categorie: "Search",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4v2?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*LUCKY_MD MEDIA PLAYER*\n
╭━━━━━━⊷⊷⊷⊷━━━━━⊛
┊✺ *Title:* ${video.title}
┊✺ *Quality:* ${video.type}
┊✺ *Duration:* ${video.timestamp}
┊✺ *Viewers:* ${video.views}
┊✺ *Uploaded:* ${video.ago}
┊✺ *Artist:* ${video.author.name}
╰━━━━━━⊷⊷⊷⊷━━━━━⊛
❖ *Direct YtLink:* ${video.url}
┌━━══━━☆✞✞☆━━══━━⊷
┊ *_Powered by frediezra._*
└━━══━━☆✞✞☆━━══━━⊷`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          document: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre('`Download success by lucky Md` ..');
      } else {
        repondre('Failed to download the media. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});

zokou({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4v2?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*LUCKY_MD MEDIA PLAYER*\n
╭━━━━━━⊷⊷⊷⊷━━━━━⊛
┊✺ *Title:* ${video.title}
┊✺ *Quality:* ${video.type}
┊✺ *Duration:* ${video.timestamp}
┊✺ *Viewers:* ${video.views}
┊✺ *Uploaded:* ${video.ago}
┊✺ *Artist:* ${video.author.name}
╰━━━━━━⊷⊷⊷⊷━━━━━⊛
❖ *Direct YtLink:* ${video.url}
┌━━══━━☆✞✞☆━━══━━⊷
┊ *_Powered by frediezra._*
└━━══━━☆✞✞☆━━══━━⊷`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre('`Your file was downloaded successfully keep using Lucky bot`');
      } else {
        repondre('Failed to download the media. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the media.');
  }
});

zokou({
  nomCom: "song",
  categorie: "Search",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song media name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4v2?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*LUCKY_MD MEDIA PLAYER*\n ╭━━━━━━⊷⊷⊷⊷━━━━━⊛
┊✺ *Title:* ${video.title}
┊✺ *Quality:* ${video.type}
┊✺ *Duration:* ${video.timestamp}
┊✺ *Viewers:* ${video.views}
┊✺ *Uploaded:* ${video.ago}
┊✺ *Artist:* ${video.author.name}
╰━━━━━━⊷⊷⊷⊷━━━━━⊛
❖ *Direct YtLink:* ${video.url}
┌━━══━━☆✞✞☆━━══━━⊷
┊ *_Powered by frediezra._*
└━━══━━☆✞✞☆━━══━━⊷`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          document: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre('*Lucky md has just downloaded your song keep using Lucky bot*...');
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});
