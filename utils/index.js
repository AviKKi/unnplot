export async function getStaticProps({ params }) {
  console.log(params)
  let tableData = null
  try {
    const res = await fetch(
      `https://potion-api.vercel.app/table?id=${params.table_id}`
    )
    tableData = await res.json()
  } catch (err) {
    console.log(err)
  }
  return {
    props: { tableData },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
