"use client";

import Products from "@/components/products/products";
import { useEffect, useState } from "react";

function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: "MLB4175934985",
        title: "Xiaomi Redmi A2 Dual Sim 64 Gb Light Green 2 Gb Ram",
        condition: "new",
        thumbnail_id: "679675-MLA72457278449_102023",
        catalog_product_id: "MLB27509700",
        listing_type_id: "gold_special",
        permalink:
          "https://www.mercadolivre.com.br/xiaomi-redmi-a2-dual-sim-64-gb-light-green-2-gb-ram/p/MLB27509700",
        buying_mode: "buy_it_now",
        site_id: "MLB",
        category_id: "MLB1055",
        domain_id: "MLB-CELLPHONES",
        thumbnail:
          "http://http2.mlstatic.com/D_679675-MLA72457278449_102023-I.jpg",
        currency_id: "BRL",
        order_backend: 2,
        price: 550,
        original_price: null,
        sale_price: null,
        sold_quantity: 5,
        available_quantity: 1,
        official_store_id: null,
        use_thumbnail_id: true,
        accepts_mercadopago: true,
        tags: [
          "good_quality_thumbnail",
          "extended_warranty_eligible",
          "immediate_payment",
          "cart_eligible",
        ],
        shipping: {
          store_pick_up: false,
          free_shipping: true,
          logistic_type: "cross_docking",
          mode: "me2",
          tags: ["mandatory_free_shipping"],
          benefits: null,
          promise: null,
        },
        stop_time: "2043-10-28T04:00:00.000Z",
        seller: {
          id: 673811950,
          nickname: "KFN2000",
          car_dealer: false,
          real_estate_agency: false,
          _: false,
          registration_date: "2020-11-17T11:42:57.000-04:00",
          tags: ["normal", "mshops", "messages_as_seller"],
          car_dealer_logo: "",
          permalink: "http://perfil.mercadolivre.com.br/KFN2000",
          seller_reputation: {
            level_id: "5_green",
            power_seller_status: "platinum",
            transactions: {
              canceled: 804,
              completed: 3163,
              period: "historic",
              ratings: {
                negative: 0.83,
                neutral: 0,
                positive: 0.17,
              },
              total: 3967,
            },
            metrics: {
              sales: {
                period: "60 days",
                completed: 2172,
              },
              claims: {
                period: "60 days",
                rate: 0,
                value: 0,
                excluded: {
                  real_value: 15,
                  real_rate: 0.0055,
                },
              },
              delayed_handling_time: {
                period: "60 days",
                rate: 0,
                value: 0,
                excluded: {
                  real_value: 170,
                  real_rate: 0.0789,
                },
              },
              cancellations: {
                period: "60 days",
                rate: 0,
                value: 0,
                excluded: {
                  real_value: 11,
                  real_rate: 0.004,
                },
              },
            },
          },
        },
        seller_address: {
          comment: "",
          address_line: "",
          id: null,
          latitude: null,
          longitude: null,
          country: {
            id: "BR",
            name: "Brasil",
          },
          state: {
            id: "BR-SP",
            name: "São Paulo",
          },
          city: {
            id: "BR-SP-44",
            name: "São Paulo",
          },
        },
        address: {
          state_id: "BR-SP",
          state_name: "São Paulo",
          city_id: "BR-SP-44",
          city_name: "São Paulo",
        },
        attributes: [
          {
            id: "BRAND",
            name: "Marca",
            value_id: "59387",
            value_name: "Xiaomi",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "59387",
                name: "Xiaomi",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "GPU_MODEL",
            name: "Modelo de GPU",
            value_id: "7498817",
            value_name: "PowerVR GE8320",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "7498817",
                name: "PowerVR GE8320",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "ITEM_CONDITION",
            name: "Condição do item",
            value_id: "2230284",
            value_name: "Novo",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "2230284",
                name: "Novo",
                struct: null,
                source: 3045741222775799,
              },
            ],
            source: 3045741222775799,
            value_type: "list",
          },
          {
            id: "LINE",
            name: "Linha",
            value_id: "199791",
            value_name: "Redmi",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "199791",
                name: "Redmi",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "MODEL",
            name: "Modelo",
            value_id: "31443",
            value_name: "A2",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "31443",
                name: "A2",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "PROCESSOR_MODEL",
            name: "Modelo do processador",
            value_id: "17603556",
            value_name: "MediaTek Helio G36",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "17603556",
                name: "MediaTek Helio G36",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
        ],
        installments: {
          quantity: 12,
          amount: 53.32,
          rate: 16.34,
          currency_id: "BRL",
        },
        winner_item_id: null,
        catalog_listing: true,
        discounts: null,
        promotions: [],
        inventory_id: null,
      },
      {
        id: "MLB4175934984",
        title: "Xiaomi Redmi A2 Dual Sim 64 Gb Light Green 2 Gb Ram",
        condition: "new",
        thumbnail_id: "679675-MLA72457278449_102023",
        catalog_product_id: "MLB27509700",
        listing_type_id: "gold_special",
        permalink:
          "https://www.mercadolivre.com.br/xiaomi-redmi-a2-dual-sim-64-gb-light-green-2-gb-ram/p/MLB27509700",
        buying_mode: "buy_it_now",
        site_id: "MLB",
        category_id: "MLB1055",
        domain_id: "MLB-CELLPHONES",
        thumbnail:
          "http://http2.mlstatic.com/D_679675-MLA72457278449_102023-I.jpg",
        currency_id: "BRL",
        order_backend: 2,
        price: 550,
        original_price: null,
        sale_price: null,
        sold_quantity: 5,
        available_quantity: 1,
        official_store_id: null,
        use_thumbnail_id: true,
        accepts_mercadopago: true,
        tags: [
          "good_quality_thumbnail",
          "extended_warranty_eligible",
          "immediate_payment",
          "cart_eligible",
        ],
        shipping: {
          store_pick_up: false,
          free_shipping: true,
          logistic_type: "cross_docking",
          mode: "me2",
          tags: ["mandatory_free_shipping"],
          benefits: null,
          promise: null,
        },
        stop_time: "2043-10-28T04:00:00.000Z",
        seller: {
          id: 673811950,
          nickname: "KFN2000",
          car_dealer: false,
          real_estate_agency: false,
          _: false,
          registration_date: "2020-11-17T11:42:57.000-04:00",
          tags: ["normal", "mshops", "messages_as_seller"],
          car_dealer_logo: "",
          permalink: "http://perfil.mercadolivre.com.br/KFN2000",
          seller_reputation: {
            level_id: "5_green",
            power_seller_status: "platinum",
            transactions: {
              canceled: 804,
              completed: 3163,
              period: "historic",
              ratings: {
                negative: 0.83,
                neutral: 0,
                positive: 0.17,
              },
              total: 3967,
            },
            metrics: {
              sales: {
                period: "60 days",
                completed: 2172,
              },
              claims: {
                period: "60 days",
                rate: 0,
                value: 0,
                excluded: {
                  real_value: 15,
                  real_rate: 0.0055,
                },
              },
              delayed_handling_time: {
                period: "60 days",
                rate: 0,
                value: 0,
                excluded: {
                  real_value: 170,
                  real_rate: 0.0789,
                },
              },
              cancellations: {
                period: "60 days",
                rate: 0,
                value: 0,
                excluded: {
                  real_value: 11,
                  real_rate: 0.004,
                },
              },
            },
          },
        },
        seller_address: {
          comment: "",
          address_line: "",
          id: null,
          latitude: null,
          longitude: null,
          country: {
            id: "BR",
            name: "Brasil",
          },
          state: {
            id: "BR-SP",
            name: "São Paulo",
          },
          city: {
            id: "BR-SP-44",
            name: "São Paulo",
          },
        },
        address: {
          state_id: "BR-SP",
          state_name: "São Paulo",
          city_id: "BR-SP-44",
          city_name: "São Paulo",
        },
        attributes: [
          {
            id: "BRAND",
            name: "Marca",
            value_id: "59387",
            value_name: "Xiaomi",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "59387",
                name: "Xiaomi",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "GPU_MODEL",
            name: "Modelo de GPU",
            value_id: "7498817",
            value_name: "PowerVR GE8320",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "7498817",
                name: "PowerVR GE8320",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "ITEM_CONDITION",
            name: "Condição do item",
            value_id: "2230284",
            value_name: "Novo",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "2230284",
                name: "Novo",
                struct: null,
                source: 3045741222775799,
              },
            ],
            source: 3045741222775799,
            value_type: "list",
          },
          {
            id: "LINE",
            name: "Linha",
            value_id: "199791",
            value_name: "Redmi",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "199791",
                name: "Redmi",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "MODEL",
            name: "Modelo",
            value_id: "31443",
            value_name: "A2",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "31443",
                name: "A2",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
          {
            id: "PROCESSOR_MODEL",
            name: "Modelo do processador",
            value_id: "17603556",
            value_name: "MediaTek Helio G36",
            attribute_group_id: "OTHERS",
            attribute_group_name: "Outros",
            value_struct: null,
            values: [
              {
                id: "17603556",
                name: "MediaTek Helio G36",
                struct: null,
                source: 1,
              },
            ],
            source: 1,
            value_type: "string",
          },
        ],
        installments: {
          quantity: 12,
          amount: 53.32,
          rate: 16.34,
          currency_id: "BRL",
        },
        winner_item_id: null,
        catalog_listing: true,
        discounts: null,
        promotions: [],
        inventory_id: null,
      },
    ]);
  }, []);

  return (
    <>
      <div className="productsList">
        {products.map((product) => {
          return <Products key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Page;
