# Crypto Trading Bounded Context

## Visión de negocio

El propósito de este bounded context es modelar un sistema de **compra y venta de criptomonedas** de manera sencilla pero completa, siguiendo los principios de un dominio financiero digital.  

La idea es que un usuario pueda:

- Crear órdenes de compra o venta de distintos activos criptográficos (como BTC, ETH).  
- Visualizar y seguir el estado de sus órdenes (pendiente, ejecutada o cancelada).  
- Tener información clara sobre cantidades, precios y activos involucrados.  

Este contexto representa la **regla central del negocio**, donde las decisiones de trading y los estados de las órdenes son los elementos clave.  

### Producto objetivo

Este bounded context podría formar parte de una plataforma de trading de criptomonedas donde:

- Los usuarios gestionan sus operaciones de compra y venta.  
- Se garantiza consistencia en los estados de las órdenes y la integridad de las cantidades de cripto y dinero involucradas.  
- Se abstraen conceptos financieros (montos, precios, tipos de órdenes) de manera clara y reutilizable.  

## Conceptos clave del dominio (sin código)

- **TradeOrder**: una orden de compra o venta generada por un usuario.  
- **CryptoAsset**: el activo digital que se quiere negociar.  
- **Estados de la orden**: reflejan el ciclo de vida de la operación (pendiente, ejecutada, cancelada).  
- **Tipos de orden**: BUY (compra) o SELL (venta).  

## Enunciado del dominio

Este bounded context implementa un modelo de **DDD + Clean Architecture**. La relación entre conceptos de negocio y código es la siguiente:

- **Agregado raíz:** `TradeOrder` → representa la orden y su ciclo de vida.  
- **Entidades secundarias:** `CryptoAsset` → el activo que se compra o vende.  
- **Value Objects:** `Money`, `CryptoAmount`, `ClientId` → encapsulan valores financieros y de cliente.  
- **Enums:** `OrderType` (BUY/SELL), `OrderStatus` (PENDING/EXECUTED/CANCELLED).  
- **Repositorio:** `TradeOrderRepository` → interfaz que permite almacenar y recuperar órdenes.  
- **Caso de uso principal:** `CreateTradeOrderUseCase` → permite crear y registrar una orden de compra o venta de criptomoneda.

> Este README permite que cualquier persona que vea el repositorio comprenda **el negocio y la visión del producto**, así como la relación con los elementos de DDD antes de entrar al código.
