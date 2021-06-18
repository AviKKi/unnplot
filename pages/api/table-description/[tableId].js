const formatTableId = (id) => {
  return [
    id.substr(0, 8),
    id.substr(8, 4),
    id.substr(12, 4),
    id.substr(16, 4),
    id.substr(20, 20),
  ].join("-")
}

export default async (req, res) => {
  const { tableId } = req.query
  res.statusCode = 200
  try {
    const r = await fetch("https://www.notion.so/api/v3/loadCachedPageChunk", {
      credentials: "include",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0",
        Accept: "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "notion-client-version": "23.8.5.2",
        "x-notion-active-user-header": "",
        "Content-Type": "application/json",
      },
      referrer: `https://www.notion.so/${tableId}`,
      body: `{"page":{"id":"${formatTableId(
        tableId
      )}"},"limit":30,"cursor":{"stack":[]},"chunkNumber":0,"verticalColumns":false}`,
      method: "POST",
      mode: "cors",
    })
    if (r.status != 200) throw r
    const json = await r.json()
    const collection = json.recordMap.collection
    let schema = []
    for (const key in collection) {
      if (collection[key]?.value?.schema)
        schema = Object.values(collection[key]?.value?.schema)
    }
    res.json(schema)
  } catch (err) {
    console.log(err)
    res.statusCode(500)
    res.json({ msg: "unhandled error occured" })
  }
}
