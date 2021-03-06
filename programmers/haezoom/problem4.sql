SELECT a.ID, NAME, ifnull(TOTAL, 0) as "결제금액"
FROM MERCHANTS a
LEFT JOIN 
(
    SELECT MERCHANT_ID, SUM(AMOUNT) TOTAL
    FROM CARD_USAGES
    WHERE CATEGORY = 0
    GROUP BY MERCHANT_ID
) b
ON a.ID = b.MERCHANT_ID
ORDER BY TOTAL DESC
LIMIT 0, 5