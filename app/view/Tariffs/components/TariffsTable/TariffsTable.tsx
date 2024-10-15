"use client";
import { Container } from "@/app/components";
import { FC, use, useCallback, useEffect, useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";
import classNames from "classnames";
import styles from "./TariffsTable.module.css";

type Props = {
  isBlack?: boolean;
};

const TariffsTable: FC<Props> = ({ isBlack = false }) => {
  const t = useTranslations("tariffs");
  const [shows, setShows] = useState<string[]>([]);
  const headers = [
    "name",
    "commission_replenishment",
    "commission_withdrawal",
    "limits_replenishment",
    "limits_withdrawal",
  ].map((header) => t(header));
  const tableContent = useMemo(
    () => [
      {
        key: "usdt",
        assets: (
          <div className={styles.assets}>
            <div className={classNames(styles.text, styles.subText)}>
              {t("assets")}
            </div>
            <b>USDT </b>Tether
          </div>
        ),
        contents: [
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/usdt.svg"
                height={32}
                width={32}
                alt="icon"
              />{" "}
              <span>
                <b>USDT</b> <span className={styles.no_break}>(ERC-20)</span>
              </span>
            </div>,
            "1 USDT",
            "25 USDT",
            "min 1 USDT",
            "min 10 USDT",
          ],
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/usdt.svg"
                height={32}
                width={32}
                alt="icon"
              />
              <span>
                <b>USDT</b> <span className={styles.no_break}>(TRC-20)</span>
              </span>
            </div>,
            "0,5 USDT",
            "1.5 USDT",
            "min 0,5 USDT",
            "min 10 USDT",
          ],
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/usdt.svg"
                height={32}
                width={32}
                alt="icon"
              />
              <span>
                <b>USDT</b> <span className={styles.no_break}>(TRON)</span>
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
              <Image
                className={styles.icon}
                src="/images/usdt.svg"
                height={32}
                width={32}
                alt="icon"
              />
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
              <Image
                className={styles.icon}
                src="/images/usdt.svg"
                height={32}
                width={32}
                alt="icon"
              />
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
        key: "trx",
        assets: (
          <div className={styles.assets}>
            <div className={classNames(styles.text, styles.subText)}>
              {t("assets")}
            </div>
            <b>TRX </b>Tron
          </div>
        ),
        contents: [
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/trx.svg"
                height={32}
                width={32}
                alt="icon"
              />
              <span>
                <b>TRX</b> <span className={styles.no_break}>(TRC-20)</span>
              </span>
            </div>,
            "4 TRX",
            "5 TRX",
            "min 4 TRX",
            "min 10 TRX",
          ],
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/trx.svg"
                height={32}
                width={32}
                alt="icon"
              />
              <span>
                <b>TRX</b> <span className={styles.no_break}>(SOL)</span>
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
              <Image
                className={styles.icon}
                src="/images/trx.svg"
                height={32}
                width={32}
                alt="icon"
              />
              <span>
                <b>TRX</b> <span className={styles.no_break}>(BEP-20)</span>
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
        key: "eth",
        assets: (
          <div className={styles.assets}>
            <div className={classNames(styles.text, styles.subText)}>
              {t("assets")}
            </div>
            <b>ETH </b>Ethereum
          </div>
        ),
        contents: [
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/eth.svg"
                height={32}
                width={32}
                alt="icon"
              />
              <span>
                <b>ETH</b> <span className={styles.no_break}>(ERC20)</span>
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
        key: "btc",
        assets: (
          <div className={styles.assets}>
            <div className={classNames(styles.text, styles.subText)}>
              {t("assets")}
            </div>
            <b>BTC </b>Bitcoin
          </div>
        ),
        contents: [
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/btc.svg"
                height={32}
                width={32}
                alt="icon"
              />
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
        key: "bnb",
        assets: (
          <div className={styles.assets}>
            <div className={classNames(styles.text, styles.subText)}>
              {t("assets")}
            </div>
            <b>BNB </b>BNB
          </div>
        ),
        contents: [
          [
            <div className={styles.name} key={0}>
              <Image
                className={styles.icon}
                src="/images/bnb.svg"
                height={32}
                width={32}
                alt="icon"
              />
              <span>
                <b>BNB</b> <span className={styles.no_break}>(BEP-20)</span>
              </span>
            </div>,
            "0,02 BNB",
            "0,1 BNB",
            "0,02 BNB",
            "0,1 BNB",
          ],
        ],
      },
    ],
    [t]
  );

  const toggleShow = useCallback(
    (key: string) => {
      setShows((prev) => {
        if (prev.includes(key)) {
          return prev.filter((item) => item !== key);
        }
        return [...prev, key];
      });
    },
    [setShows]
  );

  useEffect(() => {
    setShows(tableContent.map((item) => `${item.key}-0`));
  }, [tableContent, setShows]);

  return (
    <Container
      className={classNames(styles.table, {
        [styles.black]: isBlack,
      })}
    >
      <div className={classNames(styles.row, styles.header)}>
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
                  <div
                    className={classNames(styles.column, {
                      [styles.hideCol]: !shows.includes(`${row.key}-${l}`),
                    })}
                    onClick={
                      k === 0
                        ? () => {
                            toggleShow(`${row.key}-${l}`);
                          }
                        : undefined
                    }
                    key={k}
                  >
                    <div className={classNames(styles.text, styles.subText)}>
                      {headers[k]}
                    </div>
                    {text}
                    {k === 0 && <span className={styles.arrow} />}
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
