import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Card, Grid, Typography } from '@mui/material'
import useStyles from './index.style'
import PatientDataTable from './finderDataTable'
import { tableRowLabels } from './setting'
import { DATA } from './dummy'
import MainCard from 'src/ui-component/cards/MainCard';
import SearchSection from './SearchSection';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { fetchDistributorData } from 'src/store/apis'
import MainCardBackground from 'src/assets/images/MainCardBackground.png';
import Link from 'src/assets/images/link'
import Pencil from 'src/assets/images/pencil'
import Product from 'src/assets/images/product'
import Article from 'src/assets/images/article'

const defaultFilterConfig = {
  orderby: '-display_id',
}

const PatientList = () => {

  const { classes } = useStyles()
  const {
    container,
    rootCard,
    headerCard,
    tablePaperRoot,
  } = classes

  const [queryParamData, setQueryParamData] = useState({ name: null })

  const { data, isLoading, isError } = useQuery(
    ['myQueryKey', queryParamData], // Unique query key
    () => fetchDistributorData(queryParamData), // API function
    {
      enabled: Boolean(queryParamData?.name),
    }
  )
  const [tableFilterValue, setTableFilterValue] = useState({
    ...defaultFilterConfig,
    offset: 0,
    limit: 10,
    pageNo: 0,
  })


  const onSearch = (value: any) => {
    setQueryParamData({ "name": value })
  }


  const list = [
    {
      leftIcon: <Pencil />,
      rightIcon: <Link />,
      heading: 'Blog writing',
      body: 'Generate the best blog post to fit your audience with just few clicks of a button'
    },
    {
      leftIcon: <Product />,
      rightIcon: <Link />,
      heading: 'Product description',
      body: 'Instantly generate engaging product descriptions that sell'
    },
    {
      leftIcon: <Article />,
      rightIcon: <Link />,
      heading: 'Article writer',
      body: 'Automatically create unique factual articles at the touch of a button'
    },
    {
      leftIcon: <Pencil />,
      rightIcon: <Link />,
      heading: 'Blog writing',
      body: 'Generate the best blog post to fit your audience with just few clicks of a button'
    }
  ]

  return (
    <MainCard
      style={{}}
    >
      <Card className={rootCard}>
        <div className={headerCard}
        >
          <div style={{ height: '100%', width: '100%', padding: '50px 30px' }}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'left',
              }}
            >
              <div>
                <Typography variant="h5" component="h2"
                  style={{
                    fontWeight: 500,
                    fontSize: '48px',
                    color: '#4D4959',
                  }}
                >
                  Hey James!
                </Typography>
                <Typography variant="body1"
                  style={{
                    fontWeight: 400,
                    fontSize: '20px',
                    color: '#463D61',
                  }}
                >
                  Lets create something awesome today ✨💫
                </Typography>
              </div>
              <Button variant="outlined" style={{ background: 'transparent', border: '2px solid #754DE8', color: '#754DE8', borderRadius: '50px', width: '190px', fontWeight: 500 }}>
                Start Creating
              </Button>
            </div>
          </div>
          <div
            style={{
              height: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={MainCardBackground} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} />
            <div style={{
              zIndex: 100, background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)', padding: '15px 10px', maxWidth: '600px'
            }}>
              <Typography variant="body1"
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#463D61',
                }}
              >
                You should have more engagement by 6pm today, try posting then.  📆
              </Typography>
              <Typography variant="body1"
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#463D61',
                  marginTop: '10px'
                }}
              >
                Try our SEO optimization tool to increase engagement by 40% 🔥
              </Typography>

            </div>
          </div>
        </div>


        <div style={{ margin: '30px 0px 15px 10px' }}>
          <Typography variant="body1"
            style={{
              fontWeight: 500,
              fontSize: '24px',
              color: '#463D61',
            }}
          >
            Most Popular Tools
          </Typography>
          <Typography variant="body1"
            style={{
              fontWeight: 400,
              fontSize: '18px',
              color: '#463D61',
              marginTop: '10px'
            }}
          >
            Explore the trending tools to create your copies fast
          </Typography>

        </div>


        <div style={{ background: '#F4F3F6', padding: '12px 12px', borderRadius: '20px', marginTop: '20px' }}>
          {/*
            SOCIAL MEDIA PART 1
            */}
          <Typography variant="body1"
            style={{
              fontWeight: 400,
              fontSize: '20px',
              color: '#463D61',
            }}
          >
            Social Media
          </Typography>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              columnGap: '20px',
              margin: '10px 0px'
            }}
          >
            {list.map((item: any) => {
              return (
                <div
                  style={{
                    width: '100%',
                    height: '190px',
                    background: '#ffffff',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px 20px'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    {item.leftIcon}
                    {item.rightIcon}
                  </div>
                  <div>
                    <Typography variant="body1"
                      style={{
                        fontWeight: 500,
                        fontSize: '18px',
                        color: '#1D1437',
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography variant="body1"
                      style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#77737F',
                        marginTop: '10px'
                      }}
                    >
                      {item.body}
                    </Typography>

                  </div>

                </div>
              )
            })}
          </div>


          {/*
            SOCIAL MEDIA PART 2
            */}
          <Typography variant="body1"
            style={{
              fontWeight: 400,
              fontSize: '20px',
              color: '#463D61',
            }}
          >
            Social Media
          </Typography>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              columnGap: '20px',
              margin: '10px 0px'
            }}
          >
            {list.map((item: any) => {
              return (
                <div
                  style={{
                    width: '100%',
                    height: '190px',
                    background: '#ffffff',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '20px 20px'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    {item.leftIcon}
                    {item.rightIcon}
                  </div>
                  <div>
                    <Typography variant="body1"
                      style={{
                        fontWeight: 500,
                        fontSize: '18px',
                        color: '#1D1437',
                      }}
                    >
                      {item.heading}
                    </Typography>
                    <Typography variant="body1"
                      style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#77737F',
                        marginTop: '10px'
                      }}
                    >
                      {item.body}
                    </Typography>

                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </Card>
    </MainCard >
  )
}

export default React.memo(PatientList)
