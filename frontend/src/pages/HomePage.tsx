import { Col, Row } from 'react-bootstrap'
import ProductItem from '../components/ProductItem'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { Helmet } from 'react-helmet-async'
import { useGetProductsQuery } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import Footer from '../components/Footer'

export default function HomePage() {
  const { data: products, isLoading, error } = useGetProductsQuery()
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">#</MessageBox>
  ) : (
    <Row>
      <Helmet>
      <title>Apna Bazar</title>
      </Helmet>
            {products!.map((product) => (
            <Col key={product.slug} sn={6} md={4} lg={3}>
                <ProductItem product={product} />
            </Col>
          ))}
          <div>
      <Footer/>
    </div>
        </Row>
  )
}
