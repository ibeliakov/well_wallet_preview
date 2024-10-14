import { Container } from "@/app/components";
import { FC } from "react";

import styles from "./TariffsTable.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import classNames from "classnames";

type Props = {
  isBlack?: boolean;
};

const TariffsTable: FC<Props> = ({ isBlack = false }) => {
  const t = useTranslations("tariffs");
  const headers = [
    "name",
    "commission_replenishment",
    "commission_withdrawal",
    "limits_replenishment",
    "limits_withdrawal",
  ].map((header) => t(header));
  const tableContent = [
    {
      assets: "USDT \nTether US",
      contents: [
        [
          <div className={styles.name} key={0}>
            <Image src="/images/usdt.svg" height={32} width={32} alt="icon" />{" "}
            <span>
              <b>USDT</b> (ERC-20)
            </span>
          </div>,
          "1 USDT",
          "25 USDT",
          "min 1 USDT",
          "min 10 USDT",
        ],
        [
          <div className={styles.name} key={0}>
            <Image src="/images/usdt.svg" height={32} width={32} alt="icon" />
            <span>
              <b>USDT</b> (TRC-20)
            </span>
          </div>,
          "0,5 USDT",
          "1.5 USDT",
          "min 0,5 USDT",
          "min 10 USDT",
        ],
        [
          <div className={styles.name} key={0}>
            <Image src="/images/usdt.svg" height={32} width={32} alt="icon" />
            <span>
              <b>USDT</b> (TRON)
            </span>
          </div>,
          <span className={styles.text} key={1}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={2}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={3}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={4}>
            {t("soon")}
          </span>,
        ],
        [
          <div className={styles.name} key={0}>
            <Image src="/images/usdt.svg" height={32} width={32} alt="icon" />
            <span>
              <b>USDT</b> (SOL)
            </span>
          </div>,
          <span className={styles.text} key={1}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={2}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={3}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={4}>
            {t("soon")}
          </span>,
        ],
        [
          <div className={styles.name} key={0}>
            <Image src="/images/usdt.svg" height={32} width={32} alt="icon" />
            <span>
              <b>USDT</b> (BEP-20)
            </span>
          </div>,
          <span className={styles.text} key={1}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={2}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={3}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={4}>
            {t("soon")}
          </span>,
        ],
      ],
    },
    {
      assets: "TRX \nTron",
      contents: [
        [
          <div className={styles.name} key={0}>
            <Image src="/images/trx.svg" height={32} width={32} alt="icon" />
            <span>
              <b>TRX</b> (TRC-20)
            </span>
          </div>,
          "4 TRX",
          "5 TRX",
          "min 4 TRX",
          "min 10 TRX",
        ],
        [
          <div className={styles.name} key={0}>
            <Image src="/images/trx.svg" height={32} width={32} alt="icon" />
            <span>
              <b>TRX</b> (SOL)
            </span>
          </div>,
          <span className={styles.text} key={1}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={2}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={3}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={4}>
            {t("soon")}
          </span>,
        ],
        [
          <div className={styles.name} key={0}>
            <Image src="/images/trx.svg" height={32} width={32} alt="icon" />
            <span>
              <b>TRX</b> (BEP-20)
            </span>
          </div>,
          <span className={styles.text} key={1}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={2}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={3}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={4}>
            {t("soon")}
          </span>,
        ],
      ],
    },
    {
      assets: "ETH \nEthereum",
      contents: [
        [
          <div className={styles.name} key={0}>
            <Image src="/images/eth.svg" height={32} width={32} alt="icon" />
            <span>
              <b>ETH</b> (ERC20)
            </span>
          </div>,
          "0,00027 ETH",
          "0,00625 ETH",
          "0,00027 ETH",
          "0,0025 ETH",
        ],
      ],
    },
    {
      assets: "BTC \nBitcoin",
      contents: [
        [
          <div className={styles.name} key={0}>
            <Image src="/images/btc.svg" height={32} width={32} alt="icon" />
            <span>
              <b>Bitcoin</b>
            </span>
          </div>,
          <span className={styles.text} key={1}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={2}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={3}>
            {t("soon")}
          </span>,
          <span className={styles.text} key={4}>
            {t("soon")}
          </span>,
        ],
      ],
    },
    {
      assets: "BNB \nBNB",
      contents: [
        [
          <div className={styles.name} key={0}>
            <Image src="/images/bnb.svg" height={32} width={32} alt="icon" />
            <span>
              <b>BNB</b> (BEP-20)
            </span>
          </div>,
          "0,02 BNB",
          "0,1 BNB",
          "0,02 BNB",
          "0,1 BNB",
        ],
      ],
    },
  ];
  return (
    <Container
      className={classNames(styles.table, {
        [styles.black]: isBlack,
      })}
    >
      <div className={styles.row}>
        <div className={styles.column_1}>
          <div className={styles.text}>{t("assets")}</div>
        </div>
        <div className={styles.columns}>
          {headers.map((header, i) => (
            <div className={styles.column} key={i}>
              <span className={styles.text}>{header}</span>
            </div>
          ))}
        </div>
      </div>
      {tableContent.map((row, j) => (
        <div className={styles.row} key={j}>
          <div className={styles.column_1}>{row.assets}</div>
          <div className={styles.columns_group}>
            {row.contents.map((content, l) => (
              <div className={styles.columns} key={l}>
                {content.map((text, k) => (
                  <div className={styles.column} key={k}>
                    {text}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default TariffsTable;
